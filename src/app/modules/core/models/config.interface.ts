export interface ITable {
	header: string;
	columnTitles: string[];
	props: string[];
	data: any[];
}

export interface IConfigNode {
	text: string;
	link: string;
	children?: IConfigNode[];
	table_columns?: ITable;
	hidden?: string;
	description?: string;
}

export interface IMenuLayout {
	[key: string]: IConfigNode[] | undefined;
}

export interface IConfig {
	menu_layout?: IMenuLayout;
}
