package com.su2;

/**
 * Hello world!
 *
 */
import java.util.*;	
public class App 
{
    public static void main( String[] args )
    {
	Scanner sc = new Scanner(System.in);
	int n=sc.nextInt();
	int m = sc.nextInt();
	boolean a[]= new boolean[m+1];
	Arrays.fill(a,true);
	for(int i=n;i*i<=m;i++){
		if(a[i]==true){
			for(int j=i*i;j<m;j+=i){
				a[j]=false;
			}
		}
	}
	for(int i=n;i<=m;i++){
		if(a[i]==true){
			System.out.println(i+" ");
		}
	}
    }
    public static boolean checkPrime(int n){
	for(int i=2;i*i<n;i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
    }
	
}

