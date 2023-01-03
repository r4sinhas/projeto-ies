Executar setup.sh para dar setup do ambiente (Apenas uma vez)
Executar run.sh para ativar o ambiente
(Em caso de algo inesperado aconselha-se correr em diferentes terminais separadamente e seguir os
comandos nos ficheiros .sh referidos)

Nesta fase já deverá estar tudo a correr
Aceder por http://localhost:5173/


Para aceder à página de coach usar as credênciais
user: roger password: roger

Para player

user: leo password: messi

Para Fan

user: mike password: tyson


Para gerar dados live deve correr-se o ficheiro player.py da pasta data_generation da seguinte maneira:

python3 player.py <segundos> <id> --live

sendo <segundos> o número de segundos no jogo em que o jogador entrou em campo
(Para efeitos de não sobrecarga da API aconcelhamos usar 5100, sendo que pode ir de 0 a 5400.
Caso a geração live seja interrompida antes do tempo pelo utilizador deve correr-se o mesmo comando mas com 
<segundos> a 5399 e deixar o programa acabar de correr (cerca de 10 segundos)), e sendo <id> o id
da entidade StatsByGame correspondente ao par jogador - jogo
Após as inserções estarão disponíveis para gerar dados live os ids entre 1 e 22,
correspondendo-lhes o jogo de id 1 e o jogador de id igual ao StatsByGame