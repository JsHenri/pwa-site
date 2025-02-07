import styled from "styled-components"
import breakpoints from "../../styles/breakpoints"


export const TopHeader = styled.div`

    background: #000000;
    height: 56px;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0px 18px;
    justify-content: space-between;

    p{
        color: #ffffff;
    }

`

export const Container = styled.div`

    width: 100%;
    max-width: 1008px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 40px 0px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 32px;

    @media ${breakpoints.bg}{
        padding: 0px 20px 32px;
    }
    



    .ave-values{
        display: flex;
        justify-content: space-between;

        @media ${breakpoints.sm} {
            flex-direction: column;

            input{
                margin-top: 10px;
            }
        }

        input{
            height: 40px;
            width: 200px;
            border-radius: 5px;
            border: 2px solif #f0f0f0;
            padding-left: 5px;
        }
    }

`