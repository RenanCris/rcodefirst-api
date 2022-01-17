import {MigrationInterface, QueryRunner} from "typeorm";

export class Post1593524458225 implements MigrationInterface {
    name = 'Post1593524458225'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `post` (`idPost` int NOT NULL AUTO_INCREMENT, `titulo` varchar(255) NOT NULL, `texto` text NOT NULL, `dataPostagem` TIMESTAMP  NOT NULL DEFAULT current_timestamp, `ativo` tinyint NOT NULL DEFAULT 0, `autorId` int NULL, `catalogoTecnologiaIdCatalogo` int NULL, UNIQUE INDEX `IDX_97b351472ef79b78520fbb3611` (`titulo`), PRIMARY KEY (`idPost`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `catalogo_tecnologia` (`idCatalogo` int NOT NULL AUTO_INCREMENT, `descricao` varchar(50) NOT NULL, `categoria` varchar(4) NOT NULL, `tag` varchar(5) NOT NULL, UNIQUE INDEX `IDX_0e77c5892162fc41ce7501f00e` (`descricao`), PRIMARY KEY (`idCatalogo`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_cb8f91a85daec3759ba4d5bf653` FOREIGN KEY (`autorId`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_792a373898717a398a2727d13c9` FOREIGN KEY (`catalogoTecnologiaIdCatalogo`) REFERENCES `catalogo_tecnologia`(`idCatalogo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_792a373898717a398a2727d13c9`");
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_cb8f91a85daec3759ba4d5bf653`");
        await queryRunner.query("DROP INDEX `IDX_0e77c5892162fc41ce7501f00e` ON `catalogo_tecnologia`");
        await queryRunner.query("DROP TABLE `catalogo_tecnologia`");
        await queryRunner.query("DROP INDEX `IDX_97b351472ef79b78520fbb3611` ON `post`");
        await queryRunner.query("DROP TABLE `post`");
    }

}
