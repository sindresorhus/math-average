import test from 'ava';
import fn from './';

test(t => {
	t.is(fn(1, 3), 2);
	t.is(fn([1, 3]), 2);
});
