#!/bin/bash

# Verifica se o usuário tem privilégios de root
if [[ $EUID -ne 0 ]]; then
  echo "Este script deve ser executado como root."
  exit 1
fi

# Função para exibir as portas em uso
function listar_portas() {
  echo "Portas em uso no sistema:"
  netstat -tuln | grep LISTEN
}

# Função para verificar se uma porta específica está aberta
function verificar_porta() {
  read -p "Digite a porta que deseja verificar: " PORTA
  if netstat -tuln | grep ":$PORTA" > /dev/null; then
    echo "A porta $PORTA está em uso."
  else
    echo "A porta $PORTA não está em uso."
  fi
}

# Função para liberar uma porta específica usando iptables
function liberar_porta() {
  read -p "Digite a porta que deseja liberar: " PORTA
  iptables -A INPUT -p tcp --dport $PORTA -j ACCEPT
  echo "Porta $PORTA liberada no firewall."
}

# Menu interativo
while true; do
  echo "==============================="
  echo " Gerenciador de Portas "
  echo "==============================="
  echo "1) Listar portas em uso"
  echo "2) Verificar uma porta específica"
  echo "3) Liberar uma porta específica"
  echo "4) Sair"
  echo "==============================="
  read -p "Escolha uma opção: " OPCAO

  case $OPCAO in
    1)
      listar_portas
      ;;
    2)
      verificar_porta
      ;;
    3)
      liberar_porta
      ;;
    4)
      echo "Saindo..."
      exit 0
      ;;
    *)
      echo "Opção inválida. Tente novamente."
      ;;
  esac
done
