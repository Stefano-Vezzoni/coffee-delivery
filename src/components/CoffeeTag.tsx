export interface ITag {
    tag: string;
}

export function CoffeeTag({ tag }: ITag) {
    return (
        <div className="rounded-lg text-[10px] font-bold py-1 px-2 text-amber-600 bg-yellow-100">
            {tag.toLocaleUpperCase()}
        </div>
    );
}