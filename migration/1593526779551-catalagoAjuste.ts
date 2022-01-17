import {MigrationInterface, QueryRunner} from "typeorm";

export class catalagoAjuste1593526779551 implements MigrationInterface {
    name = 'catalagoAjuste1593526779551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` DROP COLUMN `categoria`");
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` ADD `categoria` varchar(10) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` DROP COLUMN `categoria`");
        await queryRunner.query("ALTER TABLE `catalogo_tecnologia` ADD `categoria` varchar(4) NOT NULL");
    }

}
