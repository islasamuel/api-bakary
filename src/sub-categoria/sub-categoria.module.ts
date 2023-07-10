import { Module } from '@nestjs/common';
import { SubCategoriaService } from './sub-categoria.service';
import { SubCategoriaController } from './sub-categoria.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategoria, SubCategoriaSchema } from './schema/sub-categoria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SubCategoria.name, schema: SubCategoriaSchema }])
  ],
  controllers: [SubCategoriaController],
  providers: [SubCategoriaService]
})
export class SubCategoriaModule {}
