import Bcrypt from 'bcryptjs';
import moment from 'moment';
import tz from 'moment-timezone'

moment.locale('en');

tz.tz.setDefault('America/Monterrey')

export function HashPassword(sPassword: string): string {
    const Password = Bcrypt.hashSync(sPassword, Bcrypt.genSaltSync(10));
    return Password;
}

export function ConfirmPassword(sPassword: string, sNewPassword: string): boolean {
    return sPassword != sNewPassword;
}

export function ComparePassword(sPassword: string, sHash: string): boolean {
    return Bcrypt.compareSync(sPassword, sHash);
}

export interface Filters {
    PageNumber?: number;
    ItemsPerPage?: number;
    Search?: string;
}

export function FormatDate(date: Date): string {
    return moment(date).format('D MMMM YYYY hh:mma')
}