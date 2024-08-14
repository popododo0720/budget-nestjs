import { User } from "../Entity/user.entity";

export class UserResponseDto {
    id: number;
    name: string;

    static fromEntity(user: User): UserResponseDto {
        const dto = new UserResponseDto();
        dto.id = user.id;
        dto.name = user.name;
        return dto;
    }
}