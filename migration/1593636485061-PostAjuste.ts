import {MigrationInterface, QueryRunner} from "typeorm";

export class PostAjuste1593636485061 implements MigrationInterface {
    name = 'PostAjuste1593636485061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_cb8f91a85daec3759ba4d5bf653`");
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_792a373898717a398a2727d13c9`");
        await queryRunner.query("ALTER TABLE `post` CHANGE `autorId` `autorId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `post` CHANGE `catalogoTecnologiaIdCatalogo` `catalogoTecnologiaIdCatalogo` int NOT NULL");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_cb8f91a85daec3759ba4d5bf653` FOREIGN KEY (`autorId`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_792a373898717a398a2727d13c9` FOREIGN KEY (`catalogoTecnologiaIdCatalogo`) REFERENCES `catalogo_tecnologia`(`idCatalogo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_792a373898717a398a2727d13c9`");
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_cb8f91a85daec3759ba4d5bf653`");
        await queryRunner.query("ALTER TABLE `post` CHANGE `catalogoTecnologiaIdCatalogo` `catalogoTecnologiaIdCatalogo` int NULL");
        await queryRunner.query("ALTER TABLE `post` CHANGE `autorId` `autorId` int NULL");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_792a373898717a398a2727d13c9` FOREIGN KEY (`catalogoTecnologiaIdCatalogo`) REFERENCES `catalogo_tecnologia`(`idCatalogo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_cb8f91a85daec3759ba4d5bf653` FOREIGN KEY (`autorId`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
