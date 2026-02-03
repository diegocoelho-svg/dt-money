import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"


export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <div>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>

          <strong> R$ 17.400,00</strong>
        </div>
      </SummaryCard>

      <SummaryCard>
        <div>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>

          <strong> R$ 1.259,00</strong>
        </div>
      </SummaryCard>

      <SummaryCard variant="green">
        <div>
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>

          <strong> R$ 17.400,00</strong>
        </div>
      </SummaryCard>
    </SummaryContainer >
  )
}