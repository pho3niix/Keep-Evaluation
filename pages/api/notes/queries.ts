import db from '../../../db/db';
import Notes, { INotes } from '../../../db/models/Notes.model';
import { Filters, FormatDate } from '../../../utils/services';
import { Op } from 'sequelize';

export interface ISaveNote {
    Title: INotes['Title'];
    Description: INotes['Description'];
}

export interface IUpdateNote extends ISaveNote {
    NoteId: INotes['NoteId']
}

export interface IList {
    NoteId: INotes['NoteId']
    Title: INotes['Title']
    Description: INotes['Description']
    CreatedAt: string
}

export interface INoteId { NoteId?: INotes['NoteId'] }

class Structures {
    constructor() { }

    protected _List(Results: INotes[]): IList[] {
        let List: IList[] = [];

        for (const i of Results) {
            List.push({
                NoteId: i.NoteId,
                Title: i.Title,
                Description: i.Description,
                CreatedAt: FormatDate(i.CreatedAt)
            })
        }

        return List;
    }
}

class Queries extends Structures {
    constructor() {
        super()
    }

    public async SaveNote({
        Title,
        Description
    }: ISaveNote): Promise<IList> {
        const Note = await Notes.create({
            Title,
            Description
        });

        return await this.GetNoteById({ NoteId: Note.NoteId });
    }

    public async UpdateNote({
        Title,
        Description,
        NoteId
    }: IUpdateNote) {
        await Notes.update(
            {
                Title,
                Description,
                UpdatedAt: new Date()
            },
            {
                where: {
                    NoteId
                }
            }
        )

        return this.GetNoteById({ NoteId });
    }

    public async GetNotes({
        Search,
        PageNumber,
        ItemsPerPage
    }: Filters) {
        const Page: number = PageNumber || 1;
        const Size: number = ItemsPerPage || 10;

        let Params: any = {
            order: [
                ['CreatedAt', 'desc']
            ],
            offset: (Page - 1) * Size,
            limit: Size
        }

        if (Search) {
            Params.where = {
                ...Params.where,
                [Op.or]: [
                    {
                        Title: {
                            [Op.like]: `%${Search}%`
                        }
                    },
                    {
                        Description: {
                            [Op.like]: `%${Search}%`
                        }
                    }
                ]
            }
        }

        const List = await Notes.findAndCountAll(Params);

        return {
            results: this._List(List.rows),
            total: List.count
        }
    }

    public async GetNoteById({ NoteId }: INoteId): Promise<IList> {
        const Response: any = await db.query(`
            select 
                "n"."NoteId",
                "n"."Title",
                "n"."Description",
                "n"."CreatedAt"
            from "Notes" "n"
            where "n"."NoteId" = '${NoteId}'
        `)

        return this._List(Response)[0]
    }

    public async DeleteNoteById({ NoteId }: INoteId): Promise<number> {
        return await Notes.destroy({
            where: {
                NoteId
            }
        })
    }
}

export default new Queries();