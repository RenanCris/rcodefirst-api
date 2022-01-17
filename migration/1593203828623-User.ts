import {MigrationInterface, QueryRunner} from "typeorm";

export class User1593203828623 implements MigrationInterface {
    name = 'User1593203828623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usuario` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `senha` varchar(255) NOT NULL, `ativo` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `usuario`");
    }

}
