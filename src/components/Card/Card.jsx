import {
  formatCardNumber,
  formatCvv,
  formatExpDate,
} from '../../helpers/formatters';
import { StyledBack, StyledContainer, StyledFront } from './styles';

export default function Card({ isCvvFocused, cardInfo, values }) {
  return (
    <StyledContainer rotate={isCvvFocused ? 'rotateY(180deg)' : 'rotateY(0)'}>
      <StyledFront>
        <header>
          <h3>CreditCard</h3>
          <span>{cardInfo.type?.toUpperCase() || 'VISA'}</span>
        </header>
        <main>
          <span className="chip">chevron_left developer_board rss_feed</span>
          <span className="card-number">
            {formatCardNumber(cardInfo, values.number)}
          </span>
        </main>
        <footer>
          <div className="owner">
            <span>
              {values.name || values.surname
                ? `${values.name.toUpperCase()} ${values.surname.toUpperCase()}`
                : 'OWNER'}
            </span>
          </div>
          <div className="expires">
            <span>Expires:</span>
            <span>{formatExpDate(values.expires)}</span>
          </div>
        </footer>
      </StyledFront>
      <StyledBack>
        <header>
          <div className="black-line"></div>
        </header>
        <main>
          <span className="white-line"></span>
          <span className="cvv">{formatCvv(cardInfo, values.cvv)}</span>
          <span className="cvv">{cardInfo.code?.name || 'CVV'}</span>
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
