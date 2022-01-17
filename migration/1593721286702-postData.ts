import {MigrationInterface, QueryRunner} from "typeorm";

export class postData1593721286702 implements MigrationInterface {
    name = 'postData1593721286702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` ADD `dataAlteracaoPostagem` timestamp NULL");
        await queryRunner.query("ALTER TABLE `post` CHANGE `dataPostagem` `dataPostagem` timestamp NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` CHANGE `dataPostagem` `dataPostagem` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `post` DROP COLUMN `dataAlteracaoPostagem`");
    }

}
