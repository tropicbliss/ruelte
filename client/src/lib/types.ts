/*
 Generated by typeshare 1.8.0
*/

export interface MyStruct {
	my_name: string;
	my_age: number;
}

export type MyEnum = 
	| { type: "MyVariant", content: boolean }
	| { type: "MyOtherVariant", content?: undefined }
	| { type: "MyNumber", content: number };
