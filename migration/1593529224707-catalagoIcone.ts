import {MigrationInterface, QueryRunner} from "typeorm";

export class catalagoIcone1593529224707 implements MigrationInterface {
    name = 'catalagoIcone1593529224707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` ADD `icone` varchar(10) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` DROP COLUMN `icone`");
    }

}
