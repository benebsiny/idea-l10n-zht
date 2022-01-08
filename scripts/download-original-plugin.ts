import fetch from 'cross-fetch';
import { Response } from 'node-fetch';
import { outputFile } from 'fs-extra';
import { join } from 'upath2';
import { __root } from '../test/__root';
import { cli_logger, createProgressEstimator } from '../lib/cli-progress';
import { __plugin_downloaded_dir } from '../lib/const';

cli_logger(fetch('https://plugins.jetbrains.com/plugin/download?rel=true&updateId=149295')
	.then((res) => (res as any as Response).buffer())
	.then(buf => {
		return outputFile(join(__plugin_downloaded_dir, 'zh.zip'), buf)
	}), `download Chinese ​(Simplified)​ Language Pack / 中文语言包`)
;
