import { processIdeaSegmentText } from '../lib/segment';

jest.setTimeout(60 * 1000);

/**
 * 檢查是否確實轉換
 */
describe(`segment`, () =>
{

	[
		[`打印`, `action.Print.text=打印(_P)…\naction.Print.description=打印文件`],
		[`粘貼`, `從剪貼板粘貼`],
		[`剪貼板`, `從剪貼板粘貼`],
		[`選項卡`, `編輯器選項卡`],
		[`選項卡`, `action.close.all.unmodified.editors=關閉未修改選項卡(_U)`],
		[`只讀`, `action.ToggleReadOnlyAttribute.text=切換只讀特性`],
		[`標籤頁`, `關閉組內未固定標籤頁`],
		[`標簽頁`, `關閉組內未固定標簽頁`],
		[`文件夾`, `文件夾被選中時，模板可用。`],

	].forEach(text =>
	{

		test(text.join(' - '), async () =>
		{

			let actual = await processIdeaSegmentText(text[1]);

			expect(actual).not.toContain(text[0])
			expect(actual).toMatchSnapshot();

		});

	});

})

/**
 * 檢查是否發生誤轉換
 */
describe(`should include`, () =>
{

	[
		[`顯示`, `顯示屏幕外圖像`],

	].forEach(text =>
	{

		test(text.join(' - '), async () =>
		{

			let actual = await processIdeaSegmentText(text[1]);

			expect(actual).toContain(text[0])
			expect(actual).toMatchSnapshot();

		});

	});

})
