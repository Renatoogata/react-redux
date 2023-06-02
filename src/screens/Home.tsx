
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../store";


import { Button, Center, HStack, Text } from "native-base";

export function Home() {
  const amount = useSelector((state: State) => state.bank)

  const dispatch = useDispatch();

  //lembrando que o actionCreators são aquelas funções que definem um type(tipo ex: withdraw, deposit) e um payload(pode ser alguma constante que vai alterar nosso estado),
  // exemplo (chamo withdraw(saque e passo um payload de 10 ou seja vai sacar 10 do meu estado))
  const { bankrupt, depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  // tenho acesso a todas minhas action-creators

  return (
    <Center
      flex={1}
      justifyContent='center'
    >
      <HStack>
        <Text>
          Saldo:
        </Text>
        <Text ml={2}>
          {amount}
        </Text>
      </HStack>

      <Button
        mt={5}
        onPress={() => depositMoney(1000)}
      >
        Deposit
      </Button>

      <Button
        mt={2}
        onPress={() => withdrawMoney(500)}
      >
        Withdraw
      </Button>

      <Button
        mt={2}
        onPress={() => bankrupt()}
      >
        Bankrupt
      </Button>
    </Center>
  )
}