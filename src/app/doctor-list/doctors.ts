
// export interface DoctorRespons{
//     doctors: ApiDoctors[];
// }

export interface DoctorsDto{
    id: number;
    imageUrl: string;
    lastName: string;
    name: string;
    firstName: string;
    birthday: number;
    work_experience: number;
    archived: boolean;
    actions:boolean;
    
}

export interface CreateDoctorsModel{
    id: number;
    imageUrl: string;
    lastName: string;
    name: string;
    firstName: string;
    birthday: number;
    work_experience: number;
    archived: boolean;
    categoryId:number;
    
}

export interface CategoryModel {
    id: number;
    name: string;
}