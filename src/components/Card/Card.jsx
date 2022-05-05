import { formatCardNumber, formatCvv, formatExpDate } from '../../helpers/formatCardFields';
import useCard from '../../hooks/useCard';
import { StyledBack, StyledContainer, StyledFront } from './styles';

export default function Card() {
  const { card } = useCard();

  return (
    <StyledContainer
      style={{
        transform: card.CVV.isFocused ? 'rotateY(180deg)' : 'rotateY(0)',
      }}>
      <StyledFront>
        <header>
          <h3>CreditCard</h3>
          <span>{card.cardInfo.type?.toUpperCase() || 'VISA'}</span>
        </header>
        <main>
          <span className="chip">chevron_left developer_board rss_feed</span>
          <span className="card-number">
            {formatCardNumber(card.cardInfo, card.Number.value)}
          </span>
        </main>
        <footer>
          <div className="owner">
            <span>
              {card.Name.value || card.Surname.value
                ? `${card.Name.value.toUpperCase()} ${card.Surname.value.toUpperCase()}`
                : 'OWNER'}
            </span>
          </div>
          <div className="expires">
            <span>Expires:</span>
            <span>{formatExpDate(card.Expires.value)}</span>
          </div>
        </footer>
      </StyledFront>
      <StyledBack>
        <header>
          <div className="black-line"></div>
        </header>
        <main>
          <span className="white-line"></span>
          <span className="cvv">{formatCvv(card.cardInfo, card.CVV.value)}</span>
          <span className="cvv">{card.cardInfo.code?.name || 'CVV'}</span>
        </main>
        <footer>
          <span className="holo"></span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis nisi saepe iste itaque corrupti iusto corporis optio
            modi vel dolorem facilis officiis fuga voluptas voluptate nihil
            esse, nam, maxime ut.
          </p>
        </footer>
      </StyledBack>
    </StyledContainer>
  );
}
