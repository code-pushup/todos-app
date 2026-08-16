import { formatDistance } from 'date-fns';

export function fromNow(date) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}
