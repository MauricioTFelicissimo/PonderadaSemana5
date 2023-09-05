# PonderadaSemana5
Os arquivos php eu criei diretamente no terminal, então acredito que não tem como colocá-los no repositorio do github. Por isso eu criei um vscode com dois arquivos, que imitam exatamente os arquivos que eu criei no terminal. Eles servem apenas para ver o código.

## Instancia EC2
Começei criando e lançando uma instancia ec2 no meu AWS.
Pra isso eu fui seguindo passo a passo do tutorial.
<img width="600" alt="Screen Shot 2023-09-05 at 20 12 44" src="https://github.com/MauricioTFelicissimo/PonderadaSemana5/assets/110629792/3a0d574c-57bc-477d-be7d-24d9591a7947">

## Instancia RDS
Depois eu criei uma instancia RDS.
Pra isso tambem fui seguindo passo a passo do tutorial.
<img width="600" alt="Screen Shot 2023-09-05 at 20 15 21" src="https://github.com/MauricioTFelicissimo/PonderadaSemana5/assets/110629792/e202d915-61d1-46a2-8756-0a1456001b42">

## Apache web server com PHP + MariaDB
Nessa etapa eu fiz tudo atraves da terminal. Primeiro, dentro da pasta onde estava a minha chave, eu conectei a minha instancia EC2 e instalei o web server Apache com PHP. Tudo isso eu fiz usando os comandos ensinados no tutorial. Ai quando a conexão foi feita, usei alguns outros comandos do tutorial que me permitiram baixar tudo o que eu precisava, que era o Apache web server, PHP e MariaDB. Depois disso eu inicializei um web server, e determinei as permissões de arquivo pro web server. De la eu criei as pastas onde eu criei os arquivos com o codigo, que são os mesmos que eu coloquei no repositorio. Tem dois arquivos, o dbinfo.inc e o SamplePage.php.
O dbinfo.inc define alguns valores para conectar com o banco de dados, e o SamplePage.php tem todo o resto, todo o código em si de endpoints e frontend.

## Video
https://www.loom.com/share/bac6c80ad4df49379dca9cbb430f6ead?sid=95b94455-b70e-4cab-a924-bed875241c5e
