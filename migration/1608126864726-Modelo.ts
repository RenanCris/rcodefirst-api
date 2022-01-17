import {MigrationInterface, QueryRunner} from "typeorm";

export class Modelo1608126864726 implements MigrationInterface {
    name = 'Modelo1608126864726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `modelo_texto` (`idModelo` int NOT NULL AUTO_INCREMENT, `descricao` varchar(50) NOT NULL, `texto` longtext NOT NULL, UNIQUE INDEX `IDX_0ade687f84f85c171d011ea7b0` (`descricao`), PRIMARY KEY (`idModelo`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_0ade687f84f85c171d011ea7b0` ON `modelo_texto`");
        await queryRunner.query("DROP TABLE `modelo_texto`");
    }

}
