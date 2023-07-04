import { Database } from './db';

import Users from './models/Users.model';
import Notes from './models/Notes.model';
import Sessions from './models/Sessions.model';

function Migrations() {
    return (async () => {
        await Database.sync({ alter: true });

        console.log('Users', Users == Database.models.Users);
        console.log('Notes', Notes == Database.models.Notes);
        console.log('Sessions', Sessions == Database.models.Sessions);

        console.log('Migration completed.')

        return process.exit(0);
    })();
}

export default Migrations();