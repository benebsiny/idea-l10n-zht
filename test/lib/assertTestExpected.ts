import { cn2tw_min } from '@lazy-cjk/zh-convert/min';
import { ITSValueOrArrayMaybeReadonly } from 'ts-type/lib/type/base';
import { isArray } from '../../lib/util/assert/isArray';

export function assertTestExpected(expected: ITSValueOrArrayMaybeReadonly<string>)
{
	if (isArray(expected))
	{
		return expected.forEach(assertTestExpected)
	}

	return expect(expected).toStrictEqual(cn2tw_min(expected))
}
