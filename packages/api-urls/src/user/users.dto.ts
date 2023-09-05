import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: 'string', required: true })
  first_name: string;

  @ApiProperty({ type: 'string', required: true })
  last_name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Should be a valid email',
  })
  email: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({ type: 'string' })
  first_name: string;

  @ApiPropertyOptional({ type: 'string' })
  last_name: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'Should be a valid email',
  })
  email: string;
}
