import {detectEnv} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

// dev note: it is hard (or impossible) to test this library, forks are welcome

describe('Reference test', () => {
	it('should import the object', () => {
		expect(detectEnv).not.toBe(undefined);
	});
});
