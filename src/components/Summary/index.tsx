import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <div>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </header>

          <strong>{priceFormatter.format(summary.income)}</strong>
        </div>
      </SummaryCard>

      <SummaryCard>
        <div>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>

          <strong>
            { summary.outcome && '- ' }
            {priceFormatter.format(summary.outcome)}
            </strong>
        </div>
      </SummaryCard>

      <SummaryCard variant="green">
        <div>
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>

          <strong>{priceFormatter.format(summary.total)}</strong>
        </div>
      </SummaryCard>
    </SummaryContainer >
  )
}