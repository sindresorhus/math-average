import test from 'ava';
import mathAverage from './index.js';

test('main', t => {
	t.is(mathAverage(1, 3), 2);
	t.is(mathAverage([1, 3]), 2);
});
