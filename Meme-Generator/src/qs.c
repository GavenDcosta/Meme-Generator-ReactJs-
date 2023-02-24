#include<stdio.h>
void quickSort(int arr[25], int low, int high){
    int i,j,pivot,temp;
    if(low<high){
        pivot=low;
        i=low;
        j=high;

        while(i<j){
            while(arr[i]<=arr[pivot] && i<high)
            i++;
            while(arr[j]>arr[pivot])
            j--;
            if(i<j){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        temp = arr[pivot];
        arr[pivot] = arr[j];
        arr[j] = temp;
        quickSort(arr,low,j-1);
        quickSort(arr,j+1,high);
    }
}

int main(){
    int i,n,arr[50];
    printf("Enter the no of elements: ");
    scanf("%d",&n);
    printf("Enter the elements: ");
    for(i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    quickSort(arr,0,n-1);
    printf("The sorted elements are: ");
    for(i=0;i<n;i++){
        printf("%d\t",arr[i]);
    }
    return 0;

}