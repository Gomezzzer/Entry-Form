import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) {}

    load(): void {
        const storedList: string | null = localStorage.getItem('mylist')
        if (typeof storedList !== 'string')return

        const parsedList: {_id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem('mylist', JSON.stringify(this._list))
    }
    
    clearList(): void {
        this._list = []
        this.save()
    }
    addItem(_itemObj: ListItem): void {
        this._list.push(_itemObj)
        this.save()
    }
    removeItem(_id: string): void {
        this._list = this._list.filter(item => item.id !== _id)
        this.save()

    }

    get list(): ListItem[] {
        return this._list;
    }

}
