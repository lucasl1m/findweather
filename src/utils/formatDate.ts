import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export const formatDate = () => {
    const today = dayjs(); // obtém a data de hoje
    const weekDay = today.format('DD'); // formata o dia da semana
    const weekDayName = today.format('dddd'); // formata o dia da semana
    const moth = today.format('MMM'); // formata o mês
    const year = today.format('YYYY'); // formata o ano

    const weekDayUpper = weekDayName.charAt(0).toUpperCase() + weekDayName.slice(1); // exibe o dia da semana com a primeira letra maiúscula

    const monthUpper = moth.charAt(0).toUpperCase() + moth.slice(1); // exibe o mês com a primeira letra maiúscula

    return `${weekDayUpper}, ${weekDay} ${monthUpper} de ${year}`;
};

export const formatAPIDate = (date: string) => {
    const day = dayjs(date);
    const weekDay = day.format('DD'); // formata o dia da semana

    const weekDayName = day.format('ddd'); // formata o dia da semana

    const moth = day.format('MMM'); // formata o mês

    const weekDayUpper = weekDayName.charAt(0).toUpperCase() + weekDayName.slice(1); // exibe o dia da semana com a primeira letra maiúscula
    const monthUpper = moth.charAt(0).toUpperCase() + moth.slice(1); // exibe o mês com a primeira letra maiúscula

    const result = `${weekDayUpper} ${monthUpper}, ${weekDay}`;

    return result;
}
