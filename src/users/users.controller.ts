import { Controller , Get,Post,Body,Param, Patch} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto}from './dto/create-users.dto';
// ecoute une requete ver url

//localhost:3000/users
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}


    @Get(':id')

    findOne(@Param('id')id:string){
        ////console.log('id', id);

    return this.usersService.findOne(id);

    }


    @Get()
    findAll():any[] { 
    return this.usersService.findALL();

    }
    @Post()
    createUsers(@Body()newUsers:createUsersDto){
        //tslint:disable-next-line:no console
       console.log('newUsers',newUsers);
        this.usersService.create(newUsers);


    } 

    @Patch(':id')
        updateUsers(@Param('id') id:string, @Body() users: createUsersDto){
            return this.usersService.update(id,users);
            
        }
        
    
}
