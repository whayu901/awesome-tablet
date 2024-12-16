import moment, {Moment} from 'moment';

const dateUtils = {
  formatDate: (
    date: string | Date | Moment,
    format: string = 'YYYY-MM-DD',
  ): string => {
    return moment(date).format(format);
  },

  isBeforeToday: (date: string | Date | Moment): boolean => {
    return moment(date).isBefore(moment(), 'day');
  },

  isAfterToday: (date: string | Date | Moment): boolean => {
    return moment(date).isAfter(moment(), 'day');
  },

  getDaysDifference: (
    startDate: string | Date | Moment,
    endDate: string | Date | Moment,
  ): number => {
    return moment(endDate).diff(moment(startDate), 'days');
  },

  addDays: (date: string | Date | Moment, days: number): string => {
    return moment(date).add(days, 'days').toISOString();
  },

  subtractDays: (date: string | Date | Moment, days: number): string => {
    return moment(date).subtract(days, 'days').toISOString();
  },
};

export default dateUtils;
