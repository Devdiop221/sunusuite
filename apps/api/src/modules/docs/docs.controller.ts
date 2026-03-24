import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';

@ApiTags('docs')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @Get()
  @ApiOperation({ summary: 'Lister tous les documents de l\'utilisateur' })
  findAll() {
    return this.docsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau document SunuDocs' })
  create(@Body() dto: CreateDocDto) {
    return this.docsService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un document par ID' })
  findOne(@Param('id') id: string) {
    return this.docsService.findOne(id);
  }
}
