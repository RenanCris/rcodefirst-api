import {MigrationInterface, QueryRunner} from "typeorm";

export class postData21593721884142 implements MigrationInterface {
    name = 'postData21593721884142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP COLUMN `dataPostagem`");
        await queryRunner.query("ALTER TABLE `post` ADD `dataPostagem` datetime NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP COLUMN `dataPostagem`");
        await queryRunner.query("ALTER TABLE `post` ADD `dataPostagem` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
    }

}
