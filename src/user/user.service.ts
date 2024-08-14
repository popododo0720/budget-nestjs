import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './Entity/user.entity';
import { Repository } from 'typeorm';
import { UserResponseDto } from './DTO/user-response.dto';
import { UserBuilder } from './DTO/user-builder.dto';
import { CreateUserDto } from './DTO/user-create.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<UserResponseDto[]>{
        try{
            const users = await this.userRepository.find();
            if(!users){
                return null;
            }
            return users.map(UserResponseDto.fromEntity);
        }
        catch (error) {
            console.error('Error findAll Error details: ', error);
            throw new Error('Error findAll')
        }
    }

    async findOne(id: number): Promise<UserResponseDto | null>{
        try{
            const user = await this.userRepository.findOneBy({ id });
            if(!user) {
                return null;
            }
            return UserResponseDto.fromEntity(user);
        }
        catch (error) {
            console.error('Error findOne user id:', id, 'Error details: ', error);
            throw new Error('Error findOne');
        }
    }

    // async remove(id: number): Promise<void> {
    //     await this.userRepository.delete(id);
    // }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        try{
            const newUser = new UserBuilder()
                .setName(createUserDto.name)
                .build();
            return this.userRepository.save(newUser);
        }
        catch(error) {
            console.error('Error createUser Error details: ', error);
            throw new Error('Error createUser');
        }
    }

}
