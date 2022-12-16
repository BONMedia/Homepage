import axios from "axios";

export default async function getCurrencyInfo() {

    const tokenPairs = ['KRW-BTC','KRW-ETH','KRW-XRP','KRW-TRX','KRW-DOGE', 'KRW-MATIC',"KRW-DOT","KRW-SOL",'KRW-TON', ]

    const values = await Promise.all(tokenPairs.map(async (pair) => {
        const val =  await axios.get(`https://api.upbit.com/v1/ticker?markets=${pair}`)
        return val.data
    }));

    return values

}
