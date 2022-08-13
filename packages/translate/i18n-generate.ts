import fs from 'fs';
import { opendir, readFile } from 'fs/promises';
import path, { join } from 'path';
import type { BaseTranslation } from 'typesafe-i18n';
import type { ImportLocaleMapping } from 'typesafe-i18n/importer';
import { storeTranslationsToDisk } from 'typesafe-i18n/importer';

const localePath = join(path.resolve(), 'locales');

const getDataFromAPI = async (locale: string): Promise<BaseTranslation> => {
  const folder = join(localePath, locale);
  const dir = await opendir(folder);

  const bt: BaseTranslation = {};

  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      continue;
    }

    await fs.rename(
      join(folder, dirent.name),
      join(
        folder,
        dirent.name.replace('.json', '').replace('.', '_') + '.json'
      ),
      function (err) {
        if (err) {
          console.log('ERROR: ' + err);
        }
      }
    );

    const json = JSON.parse(await readFile(join(folder, dirent.name), 'utf-8'));

    bt[dirent.name.replace('.json', '')] = json;
  }

  return bt;
};

const updateTranslations = async (): Promise<void> => {
  const lm: ImportLocaleMapping[] = [];

  const dir = await opendir(localePath);
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      const data = await getDataFromAPI(dirent.name);

      lm.push({ locale: dirent.name, translations: data });
    }
  }

  await storeTranslationsToDisk(lm);
};

updateTranslations();
