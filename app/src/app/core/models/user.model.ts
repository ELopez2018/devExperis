export interface UserModel {
    id: number;
    cc: string;
    nit: string;
    rut: File;
    name: string;
    last_name: string;
    email: string;
    image: File;
    representative_id: File;
    chamber_commerce: File;
    password: string;
    password_confirmation: string;
    phone: string;
    company: string;
    job: string;
    gender: string;
    status: boolean;
    role_id: number;
}
