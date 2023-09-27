export default Editor;
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof BlockQuote | typeof Bold | typeof CloudServices | typeof CodeBlock | typeof DataFilter | typeof DataSchema | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof GeneralHtmlSupport | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof HtmlComment | typeof HtmlEmbed | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Italic | typeof Link | typeof LinkImage | typeof List | typeof MediaEmbed | typeof PageBreak | typeof Paragraph | typeof PasteFromOffice | typeof RemoveFormat | typeof SelectAll | typeof ShowBlocks | typeof SourceEditing | typeof Strikethrough | typeof Style | typeof Subscript | typeof Superscript | typeof Table | typeof TableToolbar | typeof TextTransformation | typeof Underline)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
            shouldNotGroupWhenFull: boolean;
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        htmlSupport: {
            allow: {
                name: RegExp;
                attributes: boolean;
                classes: boolean;
                styles: boolean;
            }[];
        };
    };
}
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Bold } from "@ckeditor/ckeditor5-basic-styles";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { DataFilter } from "@ckeditor/ckeditor5-html-support";
import { DataSchema } from "@ckeditor/ckeditor5-html-support";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import { FontBackgroundColor } from "@ckeditor/ckeditor5-font";
import { FontColor } from "@ckeditor/ckeditor5-font";
import { FontFamily } from "@ckeditor/ckeditor5-font";
import { FontSize } from "@ckeditor/ckeditor5-font";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { HtmlComment } from "@ckeditor/ckeditor5-html-support";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";
import { Image } from "@ckeditor/ckeditor5-image";
import { ImageCaption } from "@ckeditor/ckeditor5-image";
import { ImageInsert } from "@ckeditor/ckeditor5-image";
import { ImageResize } from "@ckeditor/ckeditor5-image";
import { ImageStyle } from "@ckeditor/ckeditor5-image";
import { ImageToolbar } from "@ckeditor/ckeditor5-image";
import { ImageUpload } from "@ckeditor/ckeditor5-image";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { LinkImage } from "@ckeditor/ckeditor5-link";
import { List } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Strikethrough } from "@ckeditor/ckeditor5-basic-styles";
import { Style } from "@ckeditor/ckeditor5-style";
import { Subscript } from "@ckeditor/ckeditor5-basic-styles";
import { Superscript } from "@ckeditor/ckeditor5-basic-styles";
import { Table } from "@ckeditor/ckeditor5-table";
import { TableToolbar } from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { Underline } from "@ckeditor/ckeditor5-basic-styles";
