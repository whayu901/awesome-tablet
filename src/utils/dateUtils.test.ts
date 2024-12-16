import dateUtils from './dateUtils';
import moment from 'moment';

describe('dateUtils', () => {
  test('formatDate should format the date correctly', () => {
    const date = '2024-12-14';
    const formattedDate = dateUtils.formatDate(date, 'DD/MM/YYYY');
    expect(formattedDate).toBe('14/12/2024');
  });

  test('isBeforeToday should return true for a date before today', () => {
    const yesterday = moment().subtract(1, 'days').toISOString();
    expect(dateUtils.isBeforeToday(yesterday)).toBe(true);
  });

  test('isBeforeToday should return false for today or a future date', () => {
    const today = moment().toISOString();
    const tomorrow = moment().add(1, 'days').toISOString();
    expect(dateUtils.isBeforeToday(today)).toBe(false);
    expect(dateUtils.isBeforeToday(tomorrow)).toBe(false);
  });

  test('isAfterToday should return true for a date after today', () => {
    const tomorrow = moment().add(1, 'days').toISOString();
    expect(dateUtils.isAfterToday(tomorrow)).toBe(true);
  });

  test('isAfterToday should return false for today or a past date', () => {
    const today = moment().toISOString();
    const yesterday = moment().subtract(1, 'days').toISOString();
    expect(dateUtils.isAfterToday(today)).toBe(false);
    expect(dateUtils.isAfterToday(yesterday)).toBe(false);
  });

  test('getDaysDifference should return correct number of days', () => {
    const startDate = '2024-12-01';
    const endDate = '2024-12-14';
    expect(dateUtils.getDaysDifference(startDate, endDate)).toBe(13);
  });

  test('addDays should add days correctly', () => {
    const date = '2024-12-01';
    const result = dateUtils.addDays(date, 10);
    expect(result).toBe(moment('2024-12-01').add(10, 'days').toISOString());
  });

  test('subtractDays should subtract days correctly', () => {
    const date = '2024-12-14';
    const result = dateUtils.subtractDays(date, 10);
    expect(result).toBe(
      moment('2024-12-14').subtract(10, 'days').toISOString(),
    );
  });
});
