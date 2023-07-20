import Db, { Database } from './db';

import Notes from './models/Notes.model';

function Migrations() {
    return (async () => {
        await Database.sync({ alter: true });

        await Db.query(`CREATE EXTENSION IF NOT EXISTS unaccent`);

        console.log('Notes', Notes == Database.models.Notes);

        console.log('Migration completed.')

        return process.exit(0);
    })();
}

export default Migrations();