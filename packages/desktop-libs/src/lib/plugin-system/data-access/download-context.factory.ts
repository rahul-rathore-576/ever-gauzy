import { IPluginDownloadStrategy, PluginDownloadContext, PluginDownloadContextType } from '../shared';
import { CdnDownloadStrategy } from './strategies/cdn-download.strategy';
import { LocalDownloadStrategy } from './strategies/local-download.strategy';

export class DownloadContextFactory {
	public static getContext(name = PluginDownloadContextType.CDN) {
		let strategy: IPluginDownloadStrategy;
		switch (name) {
			case PluginDownloadContextType.CDN:
				strategy = new CdnDownloadStrategy();
				break;
			case PluginDownloadContextType.LOCAL:
				strategy = new LocalDownloadStrategy();
				break;
			//TODO: Add more strategies later
			default:
				throw new Error('ERROR::Unknown strategy');
		}

		return new PluginDownloadContext(strategy);
	}
}
