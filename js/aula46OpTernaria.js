/* Operação ternária - condicional if-else em uma linha
Exemplo: em um fórum, os usuário são divididos em VIPs (pontuação >= 1000) e normais (pontuação < 1000)
*/
getNivel(1000);
console.log(`Usuário ${nivelUsuario}`);

getNivel(900);
console.log(`Usuário ${nivelUsuario}`);

function getNivel(pontos) {
    return nivelUsuario = pontos >= 1000 ? 'VIP' : 'normal';
}