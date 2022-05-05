import styled, { css } from 'styled-components';

const borderRadius = css`
  border-radius: 0.5rem;
`;

export const StyledContainer = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  top: -7.5rem;
  transition: transform 1s;
  background-image: linear-gradient(to top left, #ff512f, #f09819);
  color: ${({ theme }) => theme.colors.main};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
  ${borderRadius};
`;

export const StyledFront = styled.div`
  display: grid;
  grid-template-rows: auto;
  backface-visibility: hidden;
  width: 28rem;
  height: 16rem;
  ${borderRadius};
  overflow: hidden;

  header {
    grid-row: 1/2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    h3,
    span {
      font-size: 1.7rem;
      font-style: italic;
    }

    h3 {
      font-weight: normal;
    }

    span {
      font-weight: bold;
    }
  }

  main {
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span.card-number {
      text-align: center;
      letter-spacing: 0.3rem;
      color: rgba(255, 255, 255, 0.5);
      text-shadow: 2px 2px 1px #ff512f;
      font-family: 'Share Tech Mono', monospace;
      font-size: 1.6rem;
    }

    span.chip {
      font-family: ${({ theme }) => theme.fonts.materialIcon};
      font-size: 2rem;
      padding: 1rem 1.5rem;
      align-self: flex-start;
    }
  }

  footer {
    grid-row: 3/4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 2px 2px 1px #ff512f;

    .owner {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 18rem;
      overflow: hidden;

      span {
        word-break: break-all;
      }
    }

    .expires {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const StyledBack = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  ${borderRadius};
  display: grid;
  grid-template-rows: 1fr 1fr 1.4fr;

  header {
    grid-row: 1/2;
    display: flex;
    align-items: center;

    div {
      height: 3rem;
      width: 100%;
      background-color: #151515;
    }
  }

  main {
    grid-row: 2/3;
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    font-size: 1.2rem;

    .white-line {
      height: 2.5rem;
      width: 70%;
      background-color: #edf0d4;
    }

    .cvv {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 0.2rem;
      font-style: italic;
      min-width: 3rem;
      color: rgba(255, 255, 255, 0.5);
      text-shadow: 2px 2px 1px #ff512f;
    }
  }

  footer {
    grid-row: 3/4;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    .holo {
      height: 3rem;
      flex-basis: 4rem;
      flex-shrink: 0;
      background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 0.4rem;
    }
  }
`;

export const StyledMainFront = styled.main``;
