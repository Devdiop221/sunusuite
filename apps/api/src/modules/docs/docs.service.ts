import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocDto } from './dto/create-doc.dto';

export interface SunuDoc {
  id: string;
  title: string;
  content: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class DocsService {
  private readonly docs: Map<string, SunuDoc> = new Map();

  findAll(): SunuDoc[] {
    return Array.from(this.docs.values());
  }

  create(dto: CreateDocDto): SunuDoc {
    const doc: SunuDoc = {
      id: `doc_${Date.now()}`,
      title: dto.title,
      content: dto.content ?? '',
      ownerId: dto.ownerId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.docs.set(doc.id, doc);
    return doc;
  }

  findOne(id: string): SunuDoc {
    const doc = this.docs.get(id);
    if (!doc) throw new NotFoundException(`Document ${id} introuvable`);
    return doc;
  }
}
