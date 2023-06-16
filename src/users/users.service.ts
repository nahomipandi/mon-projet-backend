import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from 'src/interfaces/user.interfaces';
import { createUsersDto} from './dto/create-users.dto';
import { NotFoundError } from 'rxjs';
import { userInfo } from 'os';

@Injectable()
export class UsersService {
    


    users:Users[]=[
    {
        id: 1,
        nom:' Maynard',
        prenom:'john',
        age:20,
    },


    {
        id: 2,
        nom:' keturah',
        prenom:'yoann',
        age:20,

    },

    {
        id: 3,
        nom:' jean',
        prenom:'king',
        age:20,

    },   

    { 
         id: 4,
        nom:' gil',
        prenom:'jules',
        age:20,
    }, 
    { 

        id: 5,
        nom:' May',
        prenom:'angel',
        age:20,
    },    

    {
        id: 6,
        nom:' medard',
        prenom:'john',
        age:20,
    },

    {
        id: 7,
        nom:' pandi',
        prenom:'nahomi',
        age:21,
    },



    ];

    findOne(id:string){
        return this.users.find(users=>users.id===Number(id));
    }

    findALL():Users[]{

        return this.users;
    }
    create(users:createUsersDto){
        this.users=[...this.users,users as Users];

    }


    update(id:string,users:Users){
        //retrieve the users to update

       const usersToUpdate=this.users.find(u => u.id=== +id);
       if(!usersToUpdate){
         return new NotFoundException('utilisateur pas trouvé');
       }

        //apply to granulary update a single property
        if(users.nom){
            usersToUpdate.nom=users.nom;
        }


        if(users.prenom){
            usersToUpdate.prenom=users.prenom;
        }


        if(users.age){
            usersToUpdate.age=users.age;
        }

    const updatedUsers =this.users.map(u=>u.id!== +id ? u :usersToUpdate);
    this.users=[...updatedUsers];
      return{updatedUsers:1, users:usersToUpdate};
    }  
}
