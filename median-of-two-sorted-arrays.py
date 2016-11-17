class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        i_1 = 0
        i_2 = 0
        counter = 0
        
        len_1 = len(nums1)
        len_2 = len(nums2)
        max_len = len_1 + len_2
        
        is_even = max_len % 2 == 0
        mid = (max_len / 2 + 1) if is_even  else (max_len + 1) / 2
        
        is_nums_1_end = False
        is_nums_2_end = False
        
        
        buffer = []
        is_buffer_a = True

        while (counter < mid) :
            # n_1 = nums1[i_1]
            # n_2 = nums2[i_2]

            if (i_1 == len_1):
                is_nums_1_end = True
            else :
                n_1 = nums1[i_1]

            if (i_2 == len_2) :
                is_nums_2_end = True
            else:
                n_2 = nums2[i_2]

           
            if (is_nums_1_end) :
                buffer = buffer + nums2[i_2:  i_2 + (mid - counter)]
                
            elif(is_nums_2_end) :
                buffer = buffer + nums1[i_1:  i_1 + (mid - counter)]
            else:
                if (n_1 > n_2) :
                    buffer.append(n_2)
                    i_2 = i_2 + 1
                elif (n_1 < n_2):
                    buffer.append(n_1)
                    i_1 = i_1+1
                else:
                    buffer.append(n_1)
                    i_1 = i_1 + 1
            if is_nums_1_end or is_nums_2_end: 
                break
            counter = counter + 1
            print buffer
        return  ((buffer[mid-1] + buffer[mid-2]) / 2.0) if is_even  else (buffer[mid-1])

print Solution().findMedianSortedArrays([4],[1,2,3,5,6,7,8])