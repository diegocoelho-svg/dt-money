import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/Logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logoImg} alt="" />

				<Dialog.Root>
					{/* asChild aproveita a child, no caso o botão, para realizar a ação */}
					<Dialog.DialogTrigger asChild>
						<NewTransactionButton> Nova Transação</NewTransactionButton>
					</Dialog.DialogTrigger>


					<NewTransactionModal />
				</Dialog.Root>

			</HeaderContent>
		</HeaderContainer >
	)
}